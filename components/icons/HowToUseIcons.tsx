import { Calendar, Users, ArrowLeftRight } from 'lucide-react';

export function CalendarIcon() {
  return (
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 flex items-center justify-center">
        <Calendar className="w-full h-full stroke-[1.5]" />
      </div>
      <div className="absolute -right-8 -top-8">
        <Users className="w-16 h-16 stroke-[1.5]" />
      </div>
      <div className="absolute -left-8 -bottom-8">
        <ArrowLeftRight className="w-16 h-16 stroke-[1.5]" />
      </div>
    </div>
  );
}

export function TeamIcon() {
  return (
    <div className="relative w-64 h-64">
      <Users className="w-full h-full stroke-[1.5]" />
    </div>
  );
}

export function IntegrationIcon() {
  return (
    <div className="relative w-64 h-64">
      <ArrowLeftRight className="w-full h-full stroke-[1.5]" />
    </div>
  );
} 