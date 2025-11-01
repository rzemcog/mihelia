namespace Mihelia.API.Models;

public class Trainee
{
    public int Id { get; set; }
    
    public IEnumerable<Training> Trainings { get; set; }
    public IEnumerable<Exercise> Exercises { get; set; }
}