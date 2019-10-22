class BoxChannel < ApplicationCable::Channel
  def subscribed
    puts "サブスクライブする"
    stream_from "box_channel"
  end

  def unsubscribed
    puts "サブスクライブを外す"
  end

  def posting(data)
    puts "送信データ#{data}"
    ActionCable.server.broadcast 'box_channel', request: data['request']
  end
end