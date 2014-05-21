guard 'livereload' do
  watch(%r{\.(css|scss|js|coffee|html|php)})
end

guard 'sass',
  input: 'assets/style/sass',
  output: 'assets/style/compiled',
  style: :compressed,
  all_on_start: true

guard 'coffeescript',
  input: 'assets/script/coffee',
  output: 'assets/script/compiled',
  all_on_start: true,
  bare: true

guard 'livereload' do
  watch(%r{app/views/.+\.(erb|haml|slim)$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{public/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html|png|jpg))).*}) { |m| "/assets/#{m[3]}" }
end

guard 'coffeescript', :input => 'app/assets/javascripts'

guard 'livereload' do
  watch(%r{app/views/.+\.(erb|haml|slim)$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{public/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html|png|jpg))).*}) { |m| "/assets/#{m[3]}" }
end

guard 'sass', :input => 'sass', :output => 'css'
