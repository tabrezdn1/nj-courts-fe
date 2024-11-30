import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Input,
  Avatar,
  CardHeader,
  CardBody,
  Spinner,
  IconButton,
} from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import OpenAI from "openai";

const LegalMate = () => {
  const location = useLocation();
  useEffect(() => {
    setMessages([
      {
        role: "system",
        content: AgentPrompt,
      },
      {
        role: "system",
        content: `The user is currently on this page ${location.pathname} on the app. Help user if they have doubt about what page they are viewing. If you are not sure about the path then assume that user is at homepage.`,
      },
    ]);
  }, [location]);

  const AI_API_KEY = import.meta.env.VITE_AI_API;
  const AgentPrompt = import.meta.env.VITE_AGENT_PROMPT;
  const ModelName = import.meta.env.VITE_LLM_MODEL_NAME ?? "";
  const [size, setSize] = React.useState(null);

  const handleOpen = (value) => setSize(value);

  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showReply, SetShowReply] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: AgentPrompt,
    },
    {
      role: "user",
      content: `The user is currently on this page ${location.pathname} on the app. Help user if they have doubt about what page they are viewing. If you do not recieve any path, it means the user is at homepage.`,
    },
  ]);

  const handleTextInput = async (e) => {
    setInput(e.target.value);
  };
  const handleReplyInput = async (e) => {
    setReply(e.target.value);
  };
  const openai = new OpenAI({
    apiKey: AI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  const handleSubmit = async () => {
    setLoading(true);
    handleOpen("xxl");
    if (reply.length > 0) {
      messages.push({ role: "user", content: reply });
    } else {
      messages.push({ role: "user", content: input });
    }
    setMessages(messages);
    try {
      //   const response = await fetch(
      //     AgentBaseUrl,
      //     {
      //       method: "POST",
      //       headers: {
      //         Authorization: `Bearer ${AI_API_KEY}`,
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         model: ModelName,
      //         messages: messages,
      //         repetition_penalty: 1.1,
      //         temperature: 0.7,
      //         top_p: 0.9,
      //         top_k: 40,
      //         max_tokens: 1024,
      //         stream: false,
      //       }),
      //     }
      // )
      const response = await openai.chat.completions.create({
        model: ModelName,
        messages: messages,
      });
      //   const data = await response.json();
      const data = await response;
      if (data && data.choices.length) {
        console.log(data.choices[0].message.content);
        setOutput(data.choices[0].message.content);
        messages.push({
          role: "system",
          content: data.choices[0].message.content,
        });
        setMessages(messages);
        setInput("");
        setReply("");
      } else {
        setOutput("No output received. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setOutput("An error occurred. Check console.");
    }
    setLoading(false);
  };

  const resetAgentChat = () => {
    handleOpen(null);
    SetShowReply(false);
    setOutput("");
    setInput("");
    setReply("");
    setMessages([
      {
        role: "system",
        content: AgentPrompt,
      },
      {
        role: "system",
        content: `The user is currently on this page ${location.pathname} on the app. Help user if they have doubt about what page they are viewing. If you are not sure about the path then assume that user is at homepage.`,
      },
    ]);
  };

  return (
    <div>
      <div className="flex d-flex">
        <div className="mt-[-5px]">
          <Avatar
            src="/legal-mate.gif"
            alt="tania andrew"
            onClick={() => handleOpen("xxl")}
          />
        </div>
        <div>
          <Input
            label="Talk with LegalMate"
            value={input}
            onChange={handleTextInput}
            disabled={loading}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
        </div>
      </div>

      <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
        className="overflow-scroll"
      >
        <DialogBody>
          <Card color="transparent" shadow={false} className="min-w-fit min-h-full overflow-y-auto">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar src="/legal-mate.gif" alt="tania andrew" />
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    Legal Mate
                  </Typography>
                </div>
                <Typography color="blue-gray">AI Agent @ LegalAid </Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-1 w-full">
              <Typography>
                {loading ? (
                  <Spinner color="teal" className="h-32 w-32 mx-auto" />
                ) : (
                  output.split("\n").map((line, index) => {
                    if (line.startsWith("# ")) {
                      return <h1 key={index}>{line.slice(2)}</h1>;
                    } else if (line.startsWith("## ")) {
                      return <h2 key={index}>{line.slice(3)}</h2>;
                    } else if (line.startsWith("### ")) {
                      return <h3 key={index}>{line.slice(4)}</h3>;
                    } else if (line.startsWith("- ")) {
                      return <li key={index}>{line.slice(2)}</li>;
                    } else {
                      // Handle bold, italic, links, and other markdown styles
                      const formattedLine = line
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
                        .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italic
                        .replace(
                          /\[(.*?)\]\((.*?)\)/g,
                          '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
                        ); // Links
                      return (
                        <p
                          key={index}
                          dangerouslySetInnerHTML={{ __html: formattedLine }}
                        />
                      );
                    }
                  })
                )}
              </Typography>
              {!loading && (
                <>
                  <p>
                    Please feel free to reply, or close the chat if you do not
                    have any more questions. Take care!
                  </p>

                  <div className="p-2">
                    <Button
                      variant="gradient"
                      className="rounded-full"
                      onClick={() => SetShowReply(true)}
                    >
                      Reply
                    </Button>
                  </div>
                </>
              )}

              <div className="p-2">
                {showReply && (
                  <>
                    <div className="flex w-full flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2">
                      <Input
                        label="Reply to LegalMate"
                        value={reply}
                        onChange={handleReplyInput}
                        disabled={loading}
                        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                      />
                      <div>
                        <IconButton
                          variant="text"
                          className="rounded-full"
                          onClick={handleSubmit}
                          disabled={reply.length === 0}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                            />
                          </svg>
                        </IconButton>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardBody>
          </Card>
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={resetAgentChat}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default LegalMate;
