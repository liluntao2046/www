var desW = 640;
var winW = document.documentElement.clientWidth;
document.documentElement.style.fontSize= winW/desW*100+'px'


new Swiper ('.swiper-container', { //初始化 swiper
    direction: 'vertical',
    loop: true,
    //  当切换结束后  , 给当前展示的区域添加对应的ID,由此实现对应的动画效果,
    onSlideChangeEnd:function(swiper){
     var sliderAry = swiper.slides ; //Swiper中的方法  获取Swiper的slides对象数组 获取当前一共有多少活动快 。通过mySwiper.slides[1]获取特定的slide
        var curIn = swiper.activeIndex;//  swiper.activeIndex   Swiper中的方法    当前展示这个区域的索引
         var total = sliderAry.length // 一共有多少个活动块
        //  根据计算id 是page 几
        var targetId = 'page';
        switch (curIn){
            case 0:
                targetId +=total-2;
                break;
            case (total-1):
                targetId +=1;
                break;
                default :
                targetId +=curIn
        }
     // -->给让前的活动快设置ID  好要把其他的ID 去掉
        [].forEach.call(sliderAry,function(item,index){
            if(curIn === index){
                item.id = targetId;
                return
            }
            item.id = null;
        })
    }
});
/*/------music------/*/
(function(){
    var musicMenu = document.getElementById('musicMenu');
    var musicAudio = document.getElementById('musicAudio');
      musicMenu.addEventListener('click',function(){
          if(musicAudio.paused){//处于暂停状态
              musicAudio.play();
              musicMenu.className = 'music move '

          }
          musicAudio.pause();
          musicMenu.className = 'music';
      },false)
    function controlMusic(){
        musicAudio.play();
        musicAudio.addEventListener('canplay',function(){//已经播放了
            musicMenu.style.display = 'block';
            musicMenu.className = ' music move'
        },false)
    }


    window.setTimeout(controlMusic,1000)

})()
