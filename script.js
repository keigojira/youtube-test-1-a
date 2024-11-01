// YouTube Data APIのキー
const API_KEY = 'YOUR_API_KEY';

// プレイヤー要素を取得
const playerDiv = document.getElementById('player');

// プレイヤーを作成
const player = new YT.Player(playerDiv, {
  videoIds: [],
  // プレイヤーのイベントリスナーを設定
