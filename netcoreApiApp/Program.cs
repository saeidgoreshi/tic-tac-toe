using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using netcoreApiApp;
using netcoreApiApp.Controllers;
using netcoreApiApp.Models;
using netcoreApiApp.Repositories;
using netcoreApiApp.Services;

var builder = WebApplication.CreateBuilder(args);



// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



/*Saeid-initial-Config*/
//var envName = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
IConfigurationRoot configuration = new ConfigurationBuilder()
       .AddJsonFile("appsettings.json")
       .Build();
string connectionString = configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<TictactoeContext>(options =>
    options.UseSqlServer(connectionString, sqlServerOptionsAction: sqlOptions =>
    {
        sqlOptions.EnableRetryOnFailure();
    }));

builder.Services.AddScoped<TictactoeContext>();


builder.Services.AddScoped<ITicTacToeService, TicTacToeService>();
builder.Services.AddScoped<ITicTacToeRepository, TicTacToeRepository>();

//Hot Chocolate GraphQL
builder.Services.AddScoped<Queries>();
builder.Services.AddScoped<Mutations>();
builder.Services
    .AddGraphQLServer()
    .RegisterDbContext<TictactoeContext>(DbContextKind.Synchronized)
    .AddQueryType<Queries>()
    .AddMutationType<Mutations>();
;



builder.Services.AddCors(options => options.AddPolicy("cors",
    builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()));
/*Saeid-initial-Config*/


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors("cors");


app.MapGraphQL("/graphql");


app.Run();
