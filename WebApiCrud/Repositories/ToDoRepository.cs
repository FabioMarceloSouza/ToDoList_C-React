using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApiCrud.Context;
using WebApiCrud.Models;
using WebApiCrud.Repositories.Interfaces;

namespace WebApiCrud.Repositories
{
    public class ToDoRepository : IToDoRepository
    {
        private readonly DatabaseContext _context;

        public ToDoRepository(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<ToDo> CreateAsync(ToDo request)
        {
            _context.Todos.Add(request);
            await _context.SaveChangesAsync();
            return request;
        }

        public async Task Delete(int id)
        {
            var todo = await  _context.Todos.FindAsync(id);
            if(todo == null)
                throw new Exception("Tarefa não existe!");
            _context.Remove(todo);
            await _context.SaveChangesAsync();    
        }

        public async Task<List<ToDo>> GetAllAsync()
        {
            return await _context.Todos.ToListAsync();
        }

        public async Task<ToDo> GetByIdAsync(int id)
        {
            var todo = await  _context.Todos.FindAsync(id);
            if(todo == null)
                throw new Exception("Tarefa não existe!");
            return todo;    
        }

        public async Task<ToDo> UpdateAsync(ToDo request)
        {
             var todo = await  _context.Todos.Where(x => x.Id == request.Id).FirstOrDefaultAsync();
            if(todo == null)
                throw new Exception("Tarefa não existe!");
            todo.Description = request.Description;
            todo.Status = request.Status;

            await _context.SaveChangesAsync();
            return request;    
        }
    }
}