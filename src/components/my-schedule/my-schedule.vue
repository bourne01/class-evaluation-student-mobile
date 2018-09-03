<template>
  <div>
    <my-header class="header">
        <div class="left" slot="left" @click="goBack">
            <img :src="require('../../assets/schedule/backward.png')" alt="">
        </div>
        <div class="center" slot="center">
            <popup-picker 
                    :data="termClassList"
                    v-model="value"                    
                    :placeholder="curClassName" 
                    @on-hide="onHide"
                    >
            </popup-picker>
        </div>            
        <div class="right" slot="right"></div>
    </my-header>
    <table>
        <thead>
        <tr>
            <th>第<br>{{curWeek}}<br>周</th>
            <th 
                v-for="(numCn,index) in numberCn"
                :class="{ thActive: (index+1)==curWeekday }" 
                :key="index">
                周{{numCn}}<!-- <br>{{index}}日 -->
            </th>
        </tr>
        </thead>
    </table>
    <div :style="tbody">
        <table>
            <tbody>
                <tr v-for="(classes,row) in classTable" :key="row">
                    <td v-for="(_class,column) in classes" 
                        :class="{ tdActive: column==curWeekday&& column!=0 }" 
                        :key="column"
                        >   
                        <my-class
                            :row="row" 
                            :column="column" 
                            :my-class="_class"
                            :class-table="classTable">
                        </my-class>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import MyHeader from '../base/my-header'
import MyClass from './class'
import { PopupPicker } from 'vux'
import {getClassSchedule,getTermList,getAdminClassList,
        getCurWeek,getGradeList} from '../../api/api.js'
export default {
    components:{
        MyClass,
        MyHeader,
        PopupPicker
    },
    data(){
        return{
            classTable:[],
            termClassList:[],//学期班级列表，用于弹窗列表
            termList:[],//学期列表
            termNameList:[],//学期名称列表
            classList:[],//班级列表
            classNameList:[],//班级名称列表
            isActive:false,
            curWeek:'',
            curWeekday:'',
            curTermName:'',//当前学期名称
            curClassName:'',//当前班级名称
            curTermId:'',//当前学期Id
            curClassId:'',//当前班级Id
            gradeList:[],//年级列表
            numberCn:[
                    '一','二','三','四','五','六','日'
                    ],
            tbody:{height:'',overflow:'scroll'},
            value:[],
        }
    },
    methods:{
        /**@function 返回上一个页面 */
        goBack(){
            history.go(-1);
            },
        
        /**@function 获取当前是第几周 */
        _getCurWeek(){
            let url = 'api/public/term!weekN.action';
            let params = {};
            this.$http(url,{params})
                .then( res => {
                    let objData = res.data;
                    if(objData.success){
                        this.curWeek = objData.weekN;
                        let dt = new Date();
                        if(dt.getDay() == 0){
                            this.curWeekday = 7;
                        }else{
                            this.curWeekday = dt.getDay();
                        }
                    }else{
                        this.$msgbox(objData.message);
                    }
                })
                .catch( err => {
                    this.reqErrorHandler(err);
                })
        },
        /**@function 获取学期列表 */
        getTerms(){
            let params = {
                        f:'uxTerm',
                        state:2,
                        simple:0
                       };
            return getTermList(params)
                .then( res => {
                    let termList = res.data.dataList;
                    this.termList = termList;
                    let curTerm = termList[0];
                    this.curTermName = curTerm.name;
                    this.curTermId = curTerm.id;
                    termList.forEach((elem,idx) => {
                        this.termNameList.push(termList[idx].name)
                    });
                    this.termNameList.unshift("请选择学期");
                })
                .catch(err => {
                    this.reqErrorHandler(err);
                })
        },
        /**@function 获取年级列表 */
        getGrades(){
            let params = {
                        f: 'uxCode',
                        codeType: 35,
                        state: 1,
                        addType: 1,
                        simple: 0,
                       };
            return getGradeList(params)
                .then( res => {
                    this.gradeList = res.data.dataList;                   
                })
                .catch(err => {
                    this.reqErrorHandler(err);
                })
        },
        /**
         * @function 获取班级列表 
         * @param {年级Id} gradeId
         */
        getClasss(gradeId){
            let params = {
                        f:'uxCla',
                        state:2,
                        simple:0,
                        grade:gradeId,
                        claType:1,//行政班
                        userType:4 //班主任与任课教师
                       };
            return getAdminClassList(params)
                .then( res => {
                    for(let item of res.data.dataList)
                        this.classList.push(item)                   
                })
                .catch(err => {
                    this.reqErrorHandler(err);
                })
        },
        /**@function 获取班级课程表 
         * @param {学期Id} termId
         * @param {班级Id} claId
        */
        getClaSchedule(termId,claId){            
            let params = {
                termId,
                angle:1,
                grade:0,
                horShow:1,
                claId};
            getClassSchedule(params)
                .then( res => {
                    let objData = res.data
                    if(objData.success){
                        let lineSchedule = [];//一个星期的所有某一节课，如从星期一到星期天
                        let schedule = [];//             
                        for(let i=0;i<8;i++){//每个星期共八节课                        
                            for(let j=0;j<7;j++){//一个星期共七天
                                lineSchedule.push(objData.lineSched[j][i])
                            }
                            schedule.push(lineSchedule)
                            lineSchedule = [];
                        }
                        this.reArrangeSchedule(schedule);
                    }
                })
                .catch(err => {
                    this.reqErrorHandler(err);
                })
        },
        /**
         * @function 通过async/await让异步请求变成同步
         */
        _getClaSchedule:async function(){
            await this.getTerms();            
            await this.getGrades();
            let curYear = new Date().getFullYear();//当前年份
            let _curYear = curYear;
            /**获取三年内的班级列表 */
            for(let grade of this.gradeList){
                if(grade.name === _curYear.toString()){
                    await this.getClasss(grade.id);
                    if((_curYear+2) === curYear){
                        break;
                    }
                    _curYear--;
                }               
            }
            let curClass = this.classList[0];
            this.curClassName = curClass.name+' >';
            this.curClassId = curClass.id;
            this.classList.forEach((elem,idx) => {
                this.classNameList.push(this.classList[idx].name)
            });
            this.classNameList.unshift("请选择班级");
            this.termClassList = [];
            this.termClassList.push(this.termNameList,this.classNameList);
            await this.getClaSchedule(this.curTermId,this.curClassId)
        },
        /**@function 点击学期与班级，获取班级课程表 */
        onHide(){
            if(this.value === undefined || this.value.length === 0 || !this.value[0]){//无任何选择，即点击取消按钮
                return
            }            
            this.classTable = [];//初始化课表
            this.curTermId = this.getIdByName(this.value[0],this.termList);
            this.curClassId = this.getIdByName(this.value[1],this.classList)
            this.getClaSchedule(this.curTermId,this.curClassId);
            this.curClassName = this.value[1];
            this.value = ['',this.value[1]+' >'];//设置当前班级名称
        },
        /**
         * @function 根据名称查找对象数组中的Id
         * @param {名称} name
         * @param {给定的数组} arr
         * @return {Id值} id 
         */
        getIdByName(name,arr){
            for(let item of arr){
                if(item.name === name){
                    return item.id
                }
            }
            return null; 
        },
        /**@function Ajax请求异常处理 
         * @param {出错对象} errObj
        */
        reqErrorHandler(errObj){
            console.log(errObj);
            if(errObj.response){ 
                let errResStatus = errObj.response.status; 
                if(errResStatus == 500 || errResStatus == 504){
                    //this.$msgbox('网络异常','请稍后重试！',2000);
                    this.isException = true;
                }else if(errResStatus == 404){
                    //this.$router.push('/page-not/found');
                }else if(errResStatus == 401){
                    //this.$msgbox('未授权登录,正在跳转...','',500);
                    //location.href = 'http://my.wzzyzz.com/login?service='+location.href
            }}
        },
        /**@function 重新整理课表，以便向界面输出 
         * @param {课表} schedule
        */
        reArrangeSchedule(schedule){            
            for(let i=0;i<schedule.length;i++){
                let lineSchedule = [];
                for(let j=0;j<7;j++){
                    let arrClass = schedule[i][j];//某节课信息是以数组形式;
                    let name = '';//教师名字
                    let classroom = '';//上课教室
                    let courseName = '';//课程名
                    /**如下for循环功能：把一门课由多人上课信息，
                     * 转化成教师(多个教师用','隔开)、教室(多个教室用','隔开)、课程名称 */
                    for(let m=0;m<arrClass.length;m++){
                        let _arrClass = arrClass[m].split(' ');
                        name = name + _arrClass[0] + ',';
                        classroom = classroom + _arrClass[2] + ',';
                        courseName = courseName + _arrClass[1] + ',';
                    }

                    name = name.substring(0,name.lastIndexOf(','))
                    classroom = classroom.substring(0,classroom.lastIndexOf(','))
                    courseName = courseName.substring(0,courseName.lastIndexOf(','))
                    lineSchedule.push({
                                name,//教师
                                classroom,//教室
                                courseName,//课程名
                                className:this.curClassName,//班级名
                                isShow:false})
                }
                lineSchedule.unshift(i);//向数组头部添加课序            
                this.classTable.push(lineSchedule);                
            }
        }
        
        
    },
    computed:{
        weekCn:function(){
            return this.numberCn[this.curWeek-1];
        }
    },
    created(){        
        this._getClaSchedule();
    },
    mounted(){
        let htmlHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
        let tbodyHeight = htmlHeight - (98*htmlWidth/375) + 'px';       
        this.tbody.height = tbodyHeight;
    }
}
</script>

<style>
    .center .vux-popup-picker-select{
        text-align: center!important;
    }
</style>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    table{
        border:0;
        margin:0;
        border-collapse:collapse;
        border-spacing:0;
        }
    thead tr{
        background-color:#f6f9f9;        
    }
    thead th{
        padding:0;
        width:px2rem(98px);
        font-size:px2rem(24px);
        height:px2rem(98px);
        line-height: 1.1em;
    }
    thead th:first-child{
        width: px2rem(64px);
        font-size:px2rem(24px);
    }
    tbody td{
        text-align: center;
        height:px2rem(124px);
        width:px2rem(98px);
        position: relative;
    }
    tbody td:first-child{
        width:px2rem(64px);
    }
    .tdActive{
        background-color:rgb(233,240,251);
    }
    .thActive{
        background-color:rgb(73,120,195);
        font-family: 'PingFang-SC-Bold';
        font-size:px2rem(28px);
    }
</style>


