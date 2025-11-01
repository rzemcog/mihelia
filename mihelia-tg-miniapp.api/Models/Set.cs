namespace Mihelia.API.Models;

public class Set
{
    public int Id { get; set; }
    
    public double Weight { get; set; }
    public int Reps { get; set; }
    public bool IsWorking { get; set; }
    
    public int ExerciseId { get; set; }
    public required Exercise Exercise { get; set; }
    
    public int TrainingId { get; set; }
    public required Training Training { get; set; }
}