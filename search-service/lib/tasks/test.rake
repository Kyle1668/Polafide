namespace :hello do

    task :hello  do 
        puts 'hello '
    end
    
    task :world => [:hello] do 
        puts 'world'
    end

end