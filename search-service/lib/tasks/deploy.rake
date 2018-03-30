namespace :deploy do

    task :heroku do
        ready_to_push()
        # puts `git status`.to_s
    end

    def ready_to_push()
        puts `git status`.split(' ')
        
    end

end