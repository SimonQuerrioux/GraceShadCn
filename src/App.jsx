import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <>
      <div className="container">
        <Button variant="outline">Button</Button>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="avte">Avte</TabsTrigger>
            <TabsTrigger value="ladje">Ladje</TabsTrigger>
          </TabsList>
          <TabsContent value="avte">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="ladje">
            <Card>
              <CardHeader>
                <CardTitle>Mercedes</CardTitle>
                <CardDescription>Mercedes je </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>

              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
