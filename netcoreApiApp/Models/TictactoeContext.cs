using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace netcoreApiApp.Models;

public partial class TictactoeContext : DbContext
{
    public TictactoeContext()
    {
    }

    public TictactoeContext(DbContextOptions<TictactoeContext> options)
        : base(options)
    {
    }

    public virtual DbSet<TicTacToe> TicTacToes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TicTacToe>(entity =>
        {
            entity.ToTable("tic-tac-toe");

            entity.Property(e => e.PlayBoard)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("playBoard");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
