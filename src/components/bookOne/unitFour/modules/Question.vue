<template>
  <div class="verbs">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p class="no-margin"><span class="s1">Past question</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="s1">きのう</span><kanji sound="べんきょう" kanji="勉強"></kanji><span class="end">しまたか</span>。<br>
            ...<span class="s1">はい</span>、<kanji sound="べんきょう" kanji="勉強"></kanji><span class="end">しました</span>。<br>
            ...<span class="s1">いいえ</span>、<kanji sound="べんきょう" kanji="勉強"></kanji><span class="end">しませんでした</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <kanji sound="まいあさ" kanji="毎朝"></kanji><span class="s1">何</span><kanji sound="じ" kanji="時"></kanji><span class="particle">に</span><span class="end">おきますか</span>。<br>
            ...６<kanji sound="じ" kanji="時"></kanji><span class="particle">に</span><span class="end">おきます</span>。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import kanji from '../../../utils/Kanji'

  export default {
    components: {
      kanji
    }
  }
</script>