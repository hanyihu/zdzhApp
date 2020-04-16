var wgtVer=null; 
			function plusReady(){ 
			    // 获取本地应用资源版本号 
			    plus.runtime.getProperty(plus.runtime.appid,function(inf){ 
			        wgtVer=inf.version; 
			        console.log("当前应用版本："+wgtVer); 
			    }); 
			} 
			if(window.plus){ 
			    plusReady(); 
			}else{ 
			    document.addEventListener('plusready',plusReady,false); 
			} 
			
			// 检测更新 
			// 实际项目中需要更换为自己服务器的地址 
			var checkUrl="http://192.168.124.13:8085/api/user/getAppVersion"; 
			function checkUpdate(){
			 mui.plusReady(function() {                               
			  var xhr=new XMLHttpRequest(); 
			  xhr.onreadystatechange=function(){ 
				   console.log(11111111111111111)
			      switch(xhr.readyState){ 
			          case 4: 
			          plus.nativeUI.closeWaiting();
			    console.log("status==="+xhr.status);
			          if(xhr.status==200){ 
			     //plus.nativeUI.showWaiting("检测更新..."); 
			              console.log("检测更新成功："+xhr.responseText); 
			              var newVer=xhr.responseText; 
			              if(wgtVer&&newVer&&(wgtVer!=newVer)){ 
			               downWgt();  // 下载升级包 
			              }
			          }else{ 
			              console.log("检测更新失败！"); 
			              plus.nativeUI.alert("检测更新失败！"); 
			          } 
			          break; 
			          default: 
			          break; 
			      } 
			  } 
			  xhr.open('POST',checkUrl); 
			  xhr.send();
			 })
			} 
			// 下载wgt文件 
			// 实际项目中需要更换为自己服务器的地址 
			var wgtUrl="http://47.108.30.209:8081/tingnan.wgt";
			function downWgt(){ 
			    plus.nativeUI.showWaiting("下载更新文件..."); 
			    plus.downloader.createDownload( wgtUrl, {filename:"_doc/update/"}, function(d,status){ 
			        if ( status == 200 ) {  
			            console.log("下载更新成功："+d.filename); 
			            /* plus.nativeUI.confirm("升级包下载完成，是否需要升级",function(e){ 
			                    var sure = (e.index == 0) ? "Yes" : "No"; 
			                    if (sure == 'Yes') { 
			                        installWgt(d.filename); // 安装wgt包 
			                    } 
			            }) */ 
			   installWgt(d.filename);
			        } else { 
			            console.log("下载更新失败！"); 
			            plus.nativeUI.alert("下载更新失败！"); 
			        } 
			        plus.nativeUI.closeWaiting(); 
			    }).start(); 
			} 
			// 更新应用资源 
			function installWgt(path){ 
			    plus.nativeUI.showWaiting("安装更新文件..."); 
				}