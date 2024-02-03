import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import QuestionViewer from "./Question-viewer/page"



const app = () => {

  const questionJson =
  [{
    "question": "What is the capital of France?",
    "options": [
      {"option": "A", "text": "Berlin"},
      {"option": "B", "text": "Madrid"},
      {"option": "C", "text": "Paris"},
      {"option": "D", "text": "Rome"}
    ]
  },{
    "question": "What is the capital of dubai?",
    "options": [
      {"option": "A", "text": "Berlin"},
      {"option": "B", "text": "Madrid"},
      {"option": "C", "text": "Paris"},
      {"option": "D", "text": "Rome"}
    ]
  },
  {
    "question": "What is the capital of india?",
    "options": [
      {"option": "A", "text": "delhi"},
      {"option": "B", "text": "Madrid"},
      {"option": "C", "text": "Paris"},
      {"option": "D", "text": "Rome"}
    ]
  }]

  return (
    <div className="flex flex-row justify-between pt-10 px-10">
      <div>
        <Tabs defaultValue="Text" className="w-[400px]">
          <TabsList className="w-[400px] justify-around">
            <TabsTrigger value="Text">Text</TabsTrigger>
            <TabsTrigger value="URL">URL</TabsTrigger>
            <TabsTrigger value="Upload">Upload</TabsTrigger>
          </TabsList>
          <TabsContent value="Text">
            <div className="flex flex-col gap-3">
              <div>
                <Label htmlFor="message">Enter Your Text</Label>
                <Textarea rows={8} placeholder="Type or copy and paste your notes to generate questions from text. Maximum 4,000 characters. Paid accounts can use up to 30,000 characters." id="message" />
              </div>
              <div>
                <Label htmlFor="QuestionType">Question Type</Label>
                <Select id="QuestionType">
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Question Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Multiple Choice">Multiple Choice</SelectItem>
                    <SelectItem value="True or False">True or False</SelectItem>
                    <SelectItem value="Short Answer">Short Answer</SelectItem>
                    <SelectItem value="Fill in the Blank">Fill in the Blank</SelectItem>
                    <SelectItem value="Matching">Matching</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="Difficulty">Difficulty</Label>
                <Select id="Difficulty">
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="QuestionCount">Question Count</Label>
                <Input id="QuestionCount" />
              </div>
              <div>
                <Label htmlFor="MCQoptioncount">MCQ option count</Label>
                <Input id="MCQoptioncount" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="URL">
            <div className="flex flex-col gap-3">
              <div>
                <Label htmlFor="message">Enter Your Text</Label>
                <Input placeholder="URL" />
              </div>
              <div>
                <Label htmlFor="QuestionType">Question Type</Label>
                <Select id="QuestionType">
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Question Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Multiple Choice">Multiple Choice</SelectItem>
                    <SelectItem value="True or False">True or False</SelectItem>
                    <SelectItem value="Short Answer">Short Answer</SelectItem>
                    <SelectItem value="Fill in the Blank">Fill in the Blank</SelectItem>
                    <SelectItem value="Matching">Matching</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="Difficulty">Difficulty</Label>
                <Select id="Difficulty">
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="QuestionCount">Question Count</Label>
                <Input id="QuestionCount" />
              </div>
              <div>
                <Label htmlFor="MCQoptioncount">MCQ option count</Label>
                <Input id="MCQoptioncount" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Upload">Upload Photos.</TabsContent>
        </Tabs>
      </div>
      <div>
        <QuestionViewer questions={questionJson} />
      </div>
    </div>


  )
}
export default app