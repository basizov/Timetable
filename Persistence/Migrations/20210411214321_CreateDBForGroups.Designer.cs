﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20210411214321_CreateDBForGroups")]
    partial class CreateDBForGroups
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.3");

            modelBuilder.Entity("Domain.Entities.Day", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("Date")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("GroupId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int>("Week")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("GroupId");

                    b.ToTable("Day");
                });

            modelBuilder.Entity("Domain.Entities.Group", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Number")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Groups");
                });

            modelBuilder.Entity("Domain.Entities.Subject", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<int>("Building")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Cabinet")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("DayId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Discipline")
                        .HasColumnType("TEXT");

                    b.Property<string>("SubjectTime")
                        .HasColumnType("TEXT");

                    b.Property<string>("SubjectType")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("DayId");

                    b.ToTable("Subject");
                });

            modelBuilder.Entity("Domain.Entities.Day", b =>
                {
                    b.HasOne("Domain.Entities.Group", null)
                        .WithMany("Days")
                        .HasForeignKey("GroupId");
                });

            modelBuilder.Entity("Domain.Entities.Subject", b =>
                {
                    b.HasOne("Domain.Entities.Day", null)
                        .WithMany("Subjects")
                        .HasForeignKey("DayId");
                });

            modelBuilder.Entity("Domain.Entities.Day", b =>
                {
                    b.Navigation("Subjects");
                });

            modelBuilder.Entity("Domain.Entities.Group", b =>
                {
                    b.Navigation("Days");
                });
#pragma warning restore 612, 618
        }
    }
}