import consumer from "./consumer"

const boxChannel = consumer.subscriptions.create("BoxChannel", {
  connected() {
    // console.log("接続")
  },

  disconnected() {
    // console.log("接続断")
  },

  received: function(get_data) {
    // console.log('クライアント受信');
    $('#boxes').append("<tr><td>" + get_data['request'] + "</td></tr>");
  },

  posting: function(post_data) {
    // console.log("クライアント送信");
    return this.perform('posting', {
      request: post_data
    });
  }
});


$(document).on('keypress', '[name=box_request]', function(event) {
  // JQueryによって１文字ごとのキー入力内容がチェックされる
  if (event.keyCode === 13) {
    boxChannel.posting(event.target.value);
    event.target.value = '';
    return event.preventDefault();
  }
});