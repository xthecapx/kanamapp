<template>
  <div class="questions">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p><kanji sound="ぎもんぶん" kanji="疑問文" en="Question Sentence"></kanji></p>
          <p class="no-margin"><span class="s1">S1</span><span class="particle">は</span><span class="s2">S2</span><span class="end">ですか</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="pronoun">これ</span><span class="particle">は</span><kanji sound="ほん" kanji="本"></kanji><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="s1">はい</span>、<span class="pronoun">それ</span><span class="particle">は</span><kanji sound="ほん" kanji="本"></kanji><span class="end">です</span>。
          </div>
          <div class="example">
            ...<span class="s1">はい</span>、<span class="particle">そう</span><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">それ</span><span class="particle">は</span><kanji sound="ほん" kanji="本"></kanji><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="s1">はい</span>、<span class="pronoun">これ</span><span class="particle">は</span><kanji sound="ほん" kanji="本"></kanji><span class="end">です</span>。
          </div>
          <div class="example">
            ...<span class="s1">はい</span>、<span class="particle">そう</span><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">あれ</span><span class="particle">は</span><span class="s2">ペン</span><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="s1">いいえ</span>、<span class="pronoun">あれ</span><span class="particle">は</span><span class="s2">ペン</span><span class="end">じゃありません</span>。
          </div>
          <div class="example">
            ...<span class="s1">いいえ</span>、<span class="particle">そう</span><span class="end">じゃありません</span>。
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p><kanji sound="ぎもんぶん" kanji="疑問文" en="Question Sentence"></kanji></p>
          <p class="no-margin"><span class="s1">S1</span><span class="particle">は</span><kanji sound="なん" kanji="何"></kanji><span class="end">ですか</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="pronoun">これ</span><span class="particle">は</span><kanji sound="なん" kanji="何"></kanji><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">それ</span><span class="particle">は</span><span class="s2">ペン</span><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">それ</span><span class="particle">は</span><kanji sound="なん" kanji="何"></kanji><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">これ</span><span class="particle">は</span><span class="s2">ペン</span><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">あれ</span><span class="particle">は</span><kanji sound="なん" kanji="何"></kanji><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">あれ</span><span class="particle">は</span><span class="s2">ペン</span><span class="end">です</span>。
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p><kanji sound="しゅるい" kanji="種類" en="Category"></kanji></p>
          <p class="no-margin"><span class="s1">S1</span><span class="particle">の</span><span class="s1">S2</span><span class="particle">は</span><kanji sound="なん" kanji="何"></kanji><span class="end">ですか</span></p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="pronoun">これ</span><span class="particle">は</span><kanji sound="なん" kanji="何"></kanji><span class="particle">の</span><kanji sound="ほん" kanji="本"></kanji><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">それ</span><span class="particle">は</span><span class="s2">パソコン</span><span class="particle">の</span><kanji sound="ほん" kanji="本"></kanji><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">それ</span><span class="particle">は</span><kanji sound="なん" kanji="何"></kanji><span class="particle">の</span><kanji sound="ほん" kanji="本"></kanji><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">これ</span><span class="particle">は</span><span class="s2">カメラ</span><span class="particle">の</span><kanji sound="ほん" kanji="本"></kanji><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">あれ</span><span class="particle">は</span><kanji sound="なん" kanji="何"></kanji><span class="particle">の</span><kanji sound="ほん" kanji="本"></kanji><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">あれ</span><span class="particle">は</span><span class="s2">チョコレート</span><span class="particle">の</span><kanji sound="ほん" kanji="本"></kanji><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">これ</span><span class="particle">は</span><kanji sound="なん" kanji="何"></kanji><span class="particle">の</span><kanji sound="じしょ" kanji="辞書"></kanji><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">それ</span><span class="particle">は</span><kanji sound="にほご" kanji="日本語"></kanji><span class="particle">の</span><kanji sound="じしょ" kanji="辞書"></kanji><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">それ</span><span class="particle">は</span><kanji sound="なん" kanji="何"></kanji><span class="particle">の</span><kanji sound="じしょ" kanji="辞書"></kanji><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">これ</span><span class="particle">は</span><span class="s1">スペイン</span><kanji sound="ご" kanji="語"></kanji><span class="particle">の</span><kanji sound="じしょ" kanji="辞書"></kanji><span class="end">です</span>。
          </div>
        </div>
        <div class="example-container">
          <div class="example">
            <span class="pronoun">あれ</span><span class="particle">は</span><kanji sound="なん" kanji="何"></kanji><span class="particle">の</span><kanji sound="じしょ" kanji="辞書"></kanji><span class="end">ですか</span>。
          </div>
          <div class="example">
            ...<span class="pronoun">あれ</span><span class="particle">は</span><kanji sound="えいご" kanji="英語"></kanji><span class="particle">の</span><kanji sound="じしょ" kanji="辞書"></kanji><span class="end">です</span>。
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <p>Other expressions</p>
        </div>
      </div>
      <div class="panel-body">
        <div class="example-container">
          <div class="example">
            <span class="pronoun">そう</span><span class="end">ですか</span>。
          </div>
          <div class="example tab">
            = is that so?
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

<style scoped>
  .example-container {
    border-bottom: 1px solid;
    margin-bottom: 8px;
  }

  .example-container:last-child .example, .example-container .example {
    border: 0;
  }

  .example-container:last-child {
    margin: 0;
    border: 0;
  }
</style>