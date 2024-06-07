import { useState } from 'react'

import './App.css'
import '../app/globals.css'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
 
import { Trash2, Pencil, Check } from "lucide-react"
import { useForm } from 'react-hook-form'

const Tasks = [
  { id: 1, task_name: "Buy groceris", status: false},
  { id: 2, task_name: "Buy pet food", status: false},
]

function TodoRow({Tasks}) {
  return (
    Tasks.map((val, rowID) => (
      <TableRow key={val.id}>
        <TableCell>{val.id}</TableCell>
        <TableCell>{val.task_name}</TableCell>
        <TableCell>{val.status ? <Badge>Done</Badge> : <Badge variant="destructive">Not Done</Badge>}</TableCell>
        <TableCell>
          <div className="flex flex-nowrap gap-2">
            <Button className="hover:bg-green-400 hover:text-white" variant="outline" size="icon">
              <Check className="h-4 w-4" />
            </Button> 
            <Button className="hover:bg-yellow-400 hover:text-white" variant="outline" size="icon">
              <Pencil className="h-4 w-4" />
            </Button> 
            <Button className="hover:bg-red-400 hover:text-white" variant="outline" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button> 
          </div>
        </TableCell>
      </TableRow>
    ))
  )
}

function App() {
  const TodoForm = useForm();

  return (
    <>
    <div className="container">
      <div className="flex justify-between align-middle">
        <h1 className="scroll-m-20 mb-12 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Todo List
        </h1>
        <Dialog>
          <Button><DialogTrigger>Create Todo</DialogTrigger></Button>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create new todo</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos minus saepe odit. Nisi quibusdam laborum, soluta distinctio a quos natus, exercitationem sunt id ducimus rem at iusto ex, quisquam reiciendis.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
          
        </Dialog>

      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Task Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TodoRow Tasks={Tasks} />
          {/* <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>

    </div>
    </>
  )
}

export default App
