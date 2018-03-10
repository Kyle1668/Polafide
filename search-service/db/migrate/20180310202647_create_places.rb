class CreatePlaces < ActiveRecord::Migration[5.0]
  def change
    create_table :places do |t|
      t.string :name
      t.string :address
      t.string :image_url
      t.boolean :is_open
      t.string :place_id
      t.float :rating
      t.string :types

      t.timestamps
    end
  end
end
