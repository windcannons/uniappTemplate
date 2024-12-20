<script
    setup>
import {
    onHide,
    onLaunch,
    onShow
} from "@dcloudio/uni-app";

onLaunch(() => {

});

onShow(() => {

});
onHide(() => {
    console.log("App Hide");
});
</script>

<style
    lang="scss">
@import "uview-plus/index.scss";

view,
div, swiper-item, swiper,input {
  box-sizing: border-box;

  &::after {
    box-sizing: border-box;
  }

  &::before {
    box-sizing: border-box;
  }
}
</style>
