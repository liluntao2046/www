new Swiper ('.swiper-container',{
    direction:'vertical',
    loop:true,
    onSlideChangeEnd:function(swiper){
        var sliderAry = swiper.slides;// swiper 中的方法 获取swiper的slides对象数组 获取当前一共有多少滑块  通过mySwiper.slides[1]获取特定的 slide
        var curIn = swiper.activeIndex; // swiper中的方法 当前展示这个区域的索引
        var total = sliderAry.length; // 一共多少活动块
        //  根据计算ID 看是page 几
         var targetId = 'page';
      switch(curIn){
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
})
    /*------------music--------------*/
~function(){
    var musicMenu = document.getElementById('musicMenu');
    var musicAudio = document.getElementById('musicAudio')
    musicMenu.addEventListener('click',function(){
        if(musicAudio.paused){//点击的时候处于暂停状态 我们就让他播放
            musicAudio.play();
            musicMenu.className = 'music move'
        }
        musicAudio.pause();
        musicMenu.className = 'music'
    },false);
    function controlMusic(){
        musicAudio.play();
        musicAudio.addEventListener('canplay',function(){//可以播放了
            musicMenu.style.display='block';
            musicMenu.className='music move';
        },false)
    }

    window.setTimeout(controlMusic,500)

}()
