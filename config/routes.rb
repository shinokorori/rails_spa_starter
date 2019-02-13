Rails.application.routes.draw do
  #mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #root to: 'homes#welcome'

  namespace :api , { format: :json }do
    scope :v1 do
     mount_devise_token_auth_for 'User', at: 'auth', controllers: {
         registrations: 'api/v1/auth/registrations'
     }
   end
  end

  #get '*path', to: 'homes#redirect_to_root'

  root :to => "application#index"

  match "*path", to: "application#index", format: false, via: :get
end
