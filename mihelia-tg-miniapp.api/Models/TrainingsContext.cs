using Microsoft.EntityFrameworkCore;

namespace Mihelia.API.Models;

public class TrainingsContext : DbContext
{
   public TrainingsContext(DbContextOptions<TrainingsContext> options): base(options)
   {
      
   }
   
   public DbSet<Training> Trainings { get; set; }
   public DbSet<Trainee> Trainees { get; set; }
   public DbSet<Exercise> Exercises { get; set; }
   public DbSet<Set> Sets { get; set; }
   
   protected override void OnModelCreating(ModelBuilder modelBuilder)
   {
      base.OnModelCreating(modelBuilder);

      modelBuilder.Entity<Set>()
         .HasOne(s => s.Exercise)
         .WithMany(e => e.Sets)
         .HasForeignKey(s => s.ExerciseId)
         .OnDelete(DeleteBehavior.Restrict);
      
      modelBuilder.Entity<Set>()
         .HasOne(s => s.Training)
         .WithMany(t => t.Sets)
         .HasForeignKey(s => s.TrainingId)
         .OnDelete(DeleteBehavior.Restrict);
      
      modelBuilder.Entity<Training>()
         .HasOne(tr => tr.Trainee)
         .WithMany(t => t.Trainings)
         .HasForeignKey(tr => tr.TraineeId)
         .OnDelete(DeleteBehavior.Cascade);
      
      modelBuilder.Entity<Exercise>()
         .HasOne(ex => ex.Trainee)
         .WithMany(t => t.Exercises)
         .HasForeignKey(ex => ex.TraineeId)
         .OnDelete(DeleteBehavior.Cascade);
   }
}   