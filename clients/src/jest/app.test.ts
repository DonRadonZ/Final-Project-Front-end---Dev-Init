import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";

const mockNotes = [
    {date:"2024-07-08", title:"Test1", detail:"Test of note 1"},
];


test('renders calendar, note and todo list',() =>{
    render(
        <BrowserRouter>
    )

    expect(screen.getByText('Add event')).toBeInTheDocument();

    
})