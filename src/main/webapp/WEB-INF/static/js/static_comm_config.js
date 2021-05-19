/**
 * @des: 全网站配置js文件
 * @author: liheng
 * @date: 2018年03月05日 下午09:05:00
 */
(function($, W){
	W.webConfig = {
		requestPrefix:"/lbdj-ptxd",  //接口请求前缀， 本地机器地址	
		aliImgPrefix:"https://lbdj.oss-cn-beijing.aliyuncs.com/",	// 阿里图片服务器地址
		workerHeadPrefix:"https://lbdj.oss-cn-beijing.aliyuncs.com/resource/worker/image/"	  // 技师头像前缀
	};
	W.requestUrl = {
		// 技师大厅相关
		workerHome:{	
			queryTopRegion:"/api/queryTopRegion",					// 获取热门城市
			queryRegionByParentId:"/api/queryRegionByParentId",		// 通过省份id获取城市	
			getCategoryByParentId:"/api/getCategoryByParentId",		// 获取服务类目	
			workerList:"/website/worker/workerListNew",				// 获取技师列表
			hyzxList:"/website/worker/hyzxList",					// 行业资讯列表
			workerDetail:"/website/worker/workerDetailNew",				// 获取技师详情
            getWorkerServiceType:"/api/getWorkerServiceType"
        }
	}
	
})(window.jQuery, window)
