require 'sinatra'

get '/' do
  redirect '/views/home.html'
end
