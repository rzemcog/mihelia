namespace Mihelia.API.Models;

public class Exercise
{
    public int Id { get; set; }
    public string Name { get; set; }
    
    public int TraineeId { get; set; }
    public required Trainee Trainee { get; set; }
    
    public IEnumerable<Set> Sets { get; set; }
}