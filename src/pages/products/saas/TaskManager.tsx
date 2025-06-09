
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckSquare, Calendar, Users, BarChart } from "lucide-react";

const TaskManager = () => {
  return (
    <div className="min-h-screen bg-saas-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">SaaS & Communication</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Task & Project Manager</h1>
            <p className="text-xl text-white/90 mb-8">
              Collaborative project management and task tracking platform for teams across Africa.
            </p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">
              <CheckSquare className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Project Management Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CheckSquare className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Task Tracking</CardTitle>
                <CardDescription>Organize and track tasks with customizable workflows</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Timeline Views</CardTitle>
                <CardDescription>Visualize project schedules and deadlines</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>Work together seamlessly with real-time updates</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BarChart className="h-12 w-12 mx-auto text-amber-600 mb-4" />
                <CardTitle>Progress Analytics</CardTitle>
                <CardDescription>Track project progress with detailed reports</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskManager;
