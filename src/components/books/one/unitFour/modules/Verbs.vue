<template>
  <div class="verbs">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p><span class="s1">V</span><span class="end">ます</span></p>
          <p><span class="s1">V</span><span class="end">ますせん</span></p>
          <p><span class="s1">V</span><span class="end">まちた</span></p>
          <p class="no-margin"><span class="s1">V</span><span class="end">ませんでした</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="s1">私</span><span class="particle">は</span><kanji sound="まいにち" kanji="毎日"></kanji> <kanji sound="べんきょう" kanji="勉強"></kanji><span class="end">します</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <p>Verb: おきます</p>
            <ul>
              <li>Afirmate: おきます</li>
              <li>Negative: おきます</li>
              <li>Past: おきました</li>
              <li>Past Negative: おきませんでした</li>
            </ul>
          </div>
          <div class="example">
            <kanji sound="まいあさ" kanji="毎朝"></kanji><span class="particle">の</span>６<kanji sound="じ" kanji="時"></kanji><span class="particle">に</span><span class="end">おきます</span>。
          </div>
          <div class="example">
            <span class="s1">あちた</span>６<kanji sound="じ" kanji="時"></kanji><span class="particle">に</span><span class="end">おきます</span>。
          </div>
          <div class="example">
            <span class="s1">けさ</span>６<kanji sound="じ" kanji="時"></kanji><span class="particle">に</span><span class="end">おきます</span>。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import kanji from '../../../../utils/Kanji'

  export default {
    components: {
      kanji
    }
  }
</script>