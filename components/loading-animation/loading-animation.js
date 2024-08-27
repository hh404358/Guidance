const angleStep = 360 / 100; // 假设我们有100帧动画
Component({
  properties: {
    // 组件属性
  },
  data: {
    // 组件数据
    airplaneDegree: 90,
  },
  ready: function() {
    this.startAnimation();
  },
  methods: {
    startAnimation: function() {
      const that = this;
      const animate = () => {
        const newDegree = (that.data.airplaneDegree + angleStep) % 360;
        that.setData({
          airplaneDegree: newDegree
        });
  
        // 更新飞机的旋转角度，确保头部朝向前进方向
        const transform = `rotate(${newDegree}deg)`;
  
        // 设置飞机的样式
        this.setData({
          airplaneStyle: `transform: ${transform}`
        });
  
    
      };
  
    }
  }
});