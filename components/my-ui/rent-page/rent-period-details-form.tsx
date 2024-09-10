"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function RentPeriodForm() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Card className="w-[350px]">
      <CardHeader className="pb-4">
        <CardTitle>Rental Agreement Details</CardTitle>
        <CardDescription>
          Enter the details of the rental agreement
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <form>
          <div className="grid w-full items-center gap-3">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="firstRentDate">First Rent Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="rentPaidPer">Rent Paid Per</Label>
              <Select>
                <SelectTrigger id="rentPaidPer">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="60">60 days</SelectItem>
                  <SelectItem value="90">90 days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="termOfLease">Term of Lease</Label>
              <Select>
                <SelectTrigger id="termOfLease">
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="6">6 months</SelectItem>
                  <SelectItem value="12">12 months</SelectItem>
                  <SelectItem value="24">2 years</SelectItem>
                  <SelectItem value="36">3 years</SelectItem>
                  <SelectItem value="48">4 years</SelectItem>
                  <SelectItem value="60">5 years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}