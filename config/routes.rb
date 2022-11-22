Rails.application.routes.draw do
  resources :parkings
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  resources :parkings do
  member do
    get 'checkvin'
  end
  end

  root "parkings#index"


  # Defines the root path route ("/")
  # root "articles#index"
end
