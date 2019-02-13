class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  #protect_from_forgery with: :exception
  protect_from_forgery 
  def index
  end
end
