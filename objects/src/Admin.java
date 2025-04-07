public class Admin extends User{

    public Admin(String name, String password) {
        super(name, password);
    }

    public boolean deleteRecipe(Recipe recipe, User user){
        return user.deleteRecipe(recipe);
    }

    public boolean deletUser(User user){//Still in development
        return false;
    }

}
