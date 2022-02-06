<template>
  <div class="top">缩放比例:{{ state.scale }}</div>

  <div class="wrapper">
    <!-- 底部 -->
    <div class="editor-bottom">
      <!-- 预览区 -->
      <div class="eui-editor-visual">
        <div class="eui-editor-visual__wrap">
          <div
            class="eui-editor-visual__container"
            style="width: 28.9928px; height: 86.0014px; left: 0px; top: 0px"
          ></div>
          <div class="eui-editor-visual__shell">
            <div
              class="editor-layout editor-layout-current editor-layout-loaded editor-layout-preview"
              style="height: 86px; width: 28.9928px; transform-origin: left top"
            >
              <!---->
              <div
                class="editor-background editor-background--hasimage editor-background--loaded"
                style="
                  width: 28.9928px;
                  height: 86px;
                  background-color: rgb(255, 255, 255);
                "
              >
                <!---->
                <div class="editor-background__main">
                  <div
                    class="editor-element editor-element-image"
                    style="
                      height: 86px;
                      width: 28.9928px;
                      transform: matrix(1, 0, 0, 1, 0, 0);
                      left: 0px;
                      top: 0px;
                    "
                  >
                    <div
                      draggable="false"
                      class="element-main"
                      style="
                        padding: 0px;
                        border-radius: 0px;
                        overflow: hidden;
                        opacity: 1;
                      "
                    >
                      <div
                        class="element-main-inner"
                        style="position: absolute; left: 0px; top: 6.75895px"
                      >
                        <img
                          crossorigin=""
                          src="./1_files/20191031-134123-b1ae.jpg"
                          style="
                            position: absolute;
                            width: 28.9928px;
                            height: 72.4821px;
                            transform: matrix(
                              1.18668,
                              0,
                              0,
                              1.18668,
                              0,
                              0.006671
                            );
                          "
                        />
                      </div>
                    </div>
                    <!---->
                    <!---->
                  </div>
                </div>
                <!---->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  按钮-->
      <div class="eui-editor-tool-bar" @mouseover="mouseover" @mouseout="mouseout">
        <!--todo 158要被替换-->
        <div
          class="eui-editor-tool-bar-btns eui-buttons-bar"
         :style="toolBarSty"
        >
          <button
            type="button"
            class="eui-button eui-editor-tool-bar-btn eui-button--middle"
          >
            <!-- 打开导航器按钮 -->
            <div class="eui-button__container">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                class="eui-icon eui-icon--window"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#2254f4"
                  d="M3.519 14.762V5.238h12.963v3.929h1.851V4.286a.94.94 0 00-.925-.953H2.592a.94.94 0 00-.926.953v11.428a.94.94 0 00.926.953h6.574v-1.905H3.519z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#2254f4"
                  d="M12.333 12.292v2.916h4.5v-2.916h-4.5zm-.75-1.459h6a.74.74 0 01.75.73v4.374a.74.74 0 01-.75.73h-6a.74.74 0 01-.75-.73v-4.374a.74.74 0 01.75-.73z"
                ></path>
              </svg>
            </div>
            <!---->
          </button>
          <div class="eui-buttons-bar__divide"></div>
          <div
            type=""
            class="eui-button eui-editor-tool-bar-btn eui-button--middle"
            style="margin-right: 0px"
          >
            <div class="eui-button__container">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="eui-icon #eui-icon--zoomout"
              >
                <path d="M3 7h10v2H3z" fill-rule="evenodd"></path>
              </svg>
            </div>
            <!---->
          </div>
          <div
            type=""
            class="eui-button eui-editor-tool-bar-btn eui-button--middle"
          >
            <div class="eui-button__container">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="eui-icon #eui-icon--zoomin"
              >
                <path
                  d="M8.667 3l-.001 3.87L13 6.871v1.613l-4.334-.001V13H7l-.001-4.517H3V6.872l3.999-.001L7 3h1.667z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <!---->
          </div>
          <button
            type="button"
            class="eui-button eui-editor-tool-bar-btn eui-editor-tool-bar__zoom-button eui-button--middle"
          >
            <div class="eui-button__container">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 1280 1024"
                class="eui-icon #eui-icon--zoom-actual-size"
              >
                <path
                  d="M256 256h768v512H256zm-128 64H0V64A64 64 0 0164 0h256v128H128zm1152 0h-128V128H960V0h256a64 64 0 0164 64zm-960 704H64a64 64 0 01-64-64V704h128v192h192zm896 0H960V896h192V704h128v256a64 64 0 01-64 64z"
                ></path>
              </svg>
              32%
            </div>
            <!---->
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  defineComponent,
  ref,
  reactive,
  onMounted,
  nextTick
} from 'vue'
const state = reactive({
  toolbarWidth:60,
  /*预览大小*/
  zoomSize: {
    w: window.innerWidth - 400, // 定义外面容器大小,
    h: window.innerHeight - 300
  },
  draggleRate: 0.3,
  /* 整个视图大小 */
  prevSize: {
    w: window.innerWidth - 400, // 定义外面容器大小,
    h: window.innerHeight - 300
  },
  scale: 2, //658813476562495, //1,
  startX: 0,
  startY: 0,
  lines: {
    h: [433, 588],
    v: [33, 143]
  },
  thick: 20,
  isShowRuler: true, // 显示标尺
  isShowReferLine: true // 显示参考线
})
const mouseover= ()=> {
state.toolbarWidth=158
}
const mouseout= ()=> {
state.toolbarWidth=60
}

 const toolBarSty=computed(()=> {
   const style={
     justifyContent: "left",
     width: state.toolbarWidth+'px'
   }
   return style
})
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  background-color: #eef2f8;
  bottom: 0;
  top: 155px;
  left: 276px;
  right: 276px;
}
.editor-bottom {
  display: flex;
  position: absolute;
  bottom: 26px;
  right: 24px;
  z-index: 2;
}
.eui-editor-visual {
  position: absolute;
  bottom: 52px;
  left: 0;
  overflow: hidden;
  width: 158px;
  height: 118px;
  padding: 12px;
  border-radius: 8px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: 50% 100%;
}
.eui-editor-tool-bar {
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: #636c78;
  box-sizing: border-box;
}
.eui-editor-tool-bar .eui-icon {
  color: #636c78;
}
.eui-editor-tool-bar .eui-icon:hover {
  color: #33383e;
}
.eui-buttons-bar__divide {
  box-sizing: border-box;
  border-left: 1px solid #e0e5ea;
  width: 0;
  height: 20px;
}

.eui-editor-tool-bar-btns {
  width: 60px;
  transition: all 0.2s;
  overflow: hidden;
  -ms-flex-pack: end !important;
  justify-content: flex-end !important;
}
.eui-buttons-bar .eui-button {
  margin: 0;
  margin-left: -1px;
  color: #444950;
  border-radius: 0;
  z-index: 1;
  display: block;
  :hover {
    color: #000;
    background-color: initial;
    border-color: transparent;
  }
}
.eui-editor-tool-bar .eui-buttons-bar .eui-button {
  padding: 4px;
  margin-right: 5px;
  border: none;
}
.eui-editor-tool-bar .eui-buttons-bar {
  padding: 6px 8px;
  background: #eff1f6;
  border: 1px solid #00000014;
  border-radius: 4px;
  box-sizing: border-box;
}

.eui-buttons-bar {
  display: inline-flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  line-height: 17px;
  position: relative;
}
.eui-editor-tool-bar .eui-editor-tool-bar-btns .eui-icon {
  font-size: 20px;
}

.eui-editor-tool-bar__zoom-button {
  width: 34px;
  font-size: 13px;
  line-height: 15px;
  transition: none;
  text-align: center;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  box-sizing: initial;
  margin-right: 0 !important;
}
.eui-editor-tool-bar__zoom-button.eui-button {
  font-size: 14px;
}
.eui-editor-tool-bar__zoom-button .eui-icon {
  display: none;
  margin: 0 auto;
}
.eui-editor-tool-bar__zoom-button:hover {
  font-size: 0 !important;
  line-height: 0;
}
.eui-editor-tool-bar__zoom-button:hover .eui-icon {
  display: block;
  font-size: 16px;
}
</style>
