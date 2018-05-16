let data = 	[  {    "title": "华为运动蓝牙耳机",    "price": 499,    "time": "2017-03-15",    "hot": 198,    "img": "img/1.jpg"  },  {    "title": "华为碎屏服务宝",    "price": 129,    "time": "2017-02-08",    "hot": 25,    "img": "img/2.png"  },  {    "title": "华为最牛逼的产品三",    "price": 895,    "time": "2017-01-25",    "hot": 568,    "img": "img/3.png"  },  {    "title": "华为最牛逼的产品四",    "price": 1895,    "time": "2016-12-30",    "hot": 20000,    "img": "img/4.png"  },  {    "title": "华为最牛逼的产品五",    "price": 3587,    "time": "2016-01-30",    "hot": 1032654,    "img": "img/5.png"  },  {    "title": "华为最牛逼的产品六",    "price": 992,    "time": "2018-01-01",    "hot": 1,    "img": "img/6.jpg"  },  {    "title": "华为最牛逼的产品七",    "price": 564,    "time": "2017-02-19",    "hot": 400,    "img": "img/7.jpg"  },  {    "title": "华为最牛逼的产品八",    "price": 420,    "time": "2017-01-25",    "hot": 240,    "img": "img/8.jpg"  },  {    "title": "华为最牛逼的产品九",    "price": 12,    "time": "2014-01-01",    "hot": 12345678,    "img": "img/9.jpg"  },  {    "title": "华为最牛逼的产品十",    "price": 100,    "time": "2013-08-01",    "hot": 12345,    "img": "img/7.jpg"  }]let Shangping = function(){}Shangping.prototype = {	// 获取元素	getDom : function(){		let STATE = {			'LIST'    : document.getElementById('list')   ,			'HEADER'  : document.getElementById('header') ,			'BTNLIST' : document.getElementById('header').getElementsByTagName('a')		}		return STATE;	},	// 创建列表	bandHtml : function(){		let str = '';		for(let i = 0 ; i < data.length ; i++){			let cur = data[i];			str += `<li>		            	<a href = "javascript:;">		                	<img src = ${cur.img} alt="">		                	<p>${cur.title}</p>		                	<p class="hot">热度:${cur.hot}</p>		                	<del>$9999</del>		                	<span>￥${cur.price}</span>		                	<p class = "time">上架时间：${cur.time}</p>			            </a>		            </li>`;		}		this.getDom().LIST.innerHTML = str;	},	// 排序 根据flg不同去改变data	sort : function(flg,count){		data.sort((a,b)=>{			return (flg == 'time' ? new Date(a[flg]) - new Date(b[flg]) : a[flg] - b[flg]) * count;		});		// 数据驱动		this.bandHtml(data);	},	// 箭头改变	arrowChange : function(_this,count){		let up    = _this.children[0],			down  = _this.children[1];		if(count > -1){// 升			// debugger;			up.style.background = 'red';			down.removeAttribute('style');		}else{// 降			down.style.background = 'red';			up.removeAttribute('style');		}	},	// 清除其它选项里面的箭头	clearAother : function(_this){		for(let i = 0; i < this.getDom().BTNLIST.length; i++){			let cur   = this.getDom().BTNLIST[i];			if(_this !== cur){				cur.children[0].removeAttribute('style');				cur.children[1].removeAttribute('style');				// 让其它选项为-1，选中时是-1*-1=1，就是升序了。				cur.count = -1;			}		}	},	// 事件	headle : function(){		let _this = this;		for(let i = 0; i < this.getDom().BTNLIST.length; i++){			let cur   = this.getDom().BTNLIST[i],				flg   = cur.getAttribute('attrName');				cur.count = -1;			cur.onclick = function(){				cur.count *= -1;				_this.sort(flg,cur.count);				_this.arrowChange(this,cur.count);				_this.clearAother(this,-1);			}		}	},	// 初始化	init : function() {		this.getDom();		this.bandHtml();		this.headle();	}}new Shangping().init();