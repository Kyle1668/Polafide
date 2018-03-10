class RemoveCreatedAtFromPlaces < ActiveRecord::Migration[5.0]
  def change
    remove_column :places, :created_at, :timestamp
    remove_column :places, :id, :integer
  end
end
