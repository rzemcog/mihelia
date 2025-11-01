namespace Mihelia.API.Models;

public class Training
{
    public int Id { get; set; }
    public int TraineeId { get; set; }
    public required Trainee Trainee { get; set; }
    public required string Name { get; set; }
    public DateTime? FinishDate { get; set; }
    
    public ICollection<Set> Sets { get; set; }
}