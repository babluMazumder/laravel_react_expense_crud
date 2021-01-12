<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Expense;

class ExpenseController extends Controller
{
    public function create(Request $request)
    {
        $expense = new Expense();
        $expense->name = $request->name;
        $expense->amount = $request->amount;
        $expense->description = $request->description;
        $expense->save();
        return response()->json(['message' => 'Created successfully.', 'expense' => $expense]);
    }

    public function list()
    {
        $expenses = Expense::all();
        return response()->json($expenses);
    }

    public function edit($id)
    {
        $expense = Expense::find($id);
        return response()->json($expense);
    }

    public function delete($id)
    {
        $expense = Expense::destroy($id);
        $expenses = Expense::all();
        return response()->json(['message' => 'deleted successfully.', 'expenses' => $expenses]);
    }

    public function update(Request $request)
    {
        $expense = Expense::find($request->id);
        $expense->name = $request->name;
        $expense->description = $request->description;
        $expense->amount = $request->amount;
        $expense->Save();
        return response()->json(['message' => 'updated Successfully', 'expense' => $expense]);
    } 
}
