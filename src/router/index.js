import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path:'',
			name:'Index',
			component:() => import('../views/index.vue'),
			children:[
				{
					path:'',
					redirect:'home'
				},
				{
					path:'home',
					name:'Home',
					component:() => import('../views/home.vue'),
					children:[
						
					]
				},				
				{
					path:'my-schedule',
					name:'ClassSchedule',
					component:() => import('../components/my-schedule/my-schedule'),
				},
				{
					path:'credit-rank',
					name:'CreditRank',
					component:() => import('../views/credit-rank.vue'),
				},
			]

		},		
		{
			path:'/course-center',
			name:'CourseCenter',
			component:() => import('../views/course-center'),			
		},
		{
			path:'/question',
			name:'AnswerQuestion',
			component:() => import('../views/question.vue')
		},
		/* {
			path:'/comment',
			name:'AnswerQuestion',
			component:() => import('../views/comment.vue')
		}, */
		{	
			path:'/page-not-found',
			name:'PageNotFound',
			component:() => import('../components/page-not-found')
		},	
	]
})
