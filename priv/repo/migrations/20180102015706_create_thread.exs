defmodule MyApp.Repo.Migrations.CreateThread do
  use Ecto.Migration

  def change do
    create table(:thread) do
      add :title, :string, size: 300
      add :category_id, :integer
      add :view_count, :integer
      add :user_id, references(:user)
      add :last_reply_id, :integer
      add :sticky, :boolean
      add :locked, :boolean
      add :edited, :boolean
      timestamps()
    end
  end
end
