using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiCrud.Models;

namespace WebApiCrud.Repositories.Interfaces
{
    public interface IToDoRepository
    {
        Task<List<ToDo>> GetAllAsync();
        Task<ToDo> GetByIdAsync(int id);
        Task<ToDo> CreateAsync(ToDo request);
        Task<ToDo> UpdateAsync(ToDo request);
        Task Delete(int id);
    }
}