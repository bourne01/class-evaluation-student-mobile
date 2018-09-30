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
				{
					path:'my-errors',
					name:'MyErrorCollection',
					component:() => import('../views/my-errors.vue')
				},
				{
					path:'me',
					name:'Me',
					component:() => import('../views/me.vue')
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
		
		{
			path:'/course-errors',
			name:'CourseErrorCollection',
			component:() => import('../views/course-errors.vue')
		},
		/* {	
			path:'/page-not-found',
			name:'PageNotFound',
			component:() => import('../views/page-not-found')
		},	 */
		{	
			path:'/favorite-question',
			name:'FavoritQuestion',
			component:() => import('../views/favorite-question')
		},	
		{	
			path:'/favorite-opencourse',
			name:'FavoritQuestion',
			component:() => import('../views/favorite-opencourse')
		},	
		{	
			path:'/notice',
			name:'FavoritQuestion',
			component:() => import('../views/notice')
		},	
		{	
			path:'/search',
			name:'SearchCourse',
			component:() => import('../views/search')
		},	
	]
})
