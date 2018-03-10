class RemoveUpdatedAtFromPlaces < ActiveRecord::Migration[5.0]
  def change
    remove_column :places, :updated_at, :timestamp
  end
end
