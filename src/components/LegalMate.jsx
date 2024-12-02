import { useEffect, useState } from "react";
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
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: AgentPrompt,
    },
    {
      role: "user",
      content: `The user is currently on this page ${location.pathname} on the app. Help user if they have doubt about what page they are viewing. If you do not receive any path, it means the user is at homepage.`,
    },
  ]);

  const handleTextInput = (e) => {
    setInput(e.target.value);
  };
  const handleReplyInput = (e) => {
    setReply(e.target.value);
  };
  const openai = new OpenAI({
    apiKey: AI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  const handleSubmit = async () => {
    setLoading(true);
    handleOpen("xxl");
    const userMessage = reply.length > 0 ? reply : input;
    messages.push({ role: "user", content: userMessage });
    setMessages(messages);
    try {
      const response = await openai.chat.completions.create({
        model: ModelName,
        messages: messages,
      });
      if (response && response.choices.length) {
        setOutput(response.choices[0].message.content);
        messages.push({
          role: "system",
          content: response.choices[0].message.content,
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
    setShowReply(false);
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
            alt="LegalMate avatar"
            onClick={() => handleOpen("xxl")}
            role="button"
            aria-label="Open chat with LegalMate"
            tabIndex={0} // Added to make it focusable
            onKeyPress={(e) => e.key === "Enter" && handleOpen("xxl")} // Added keyboard accessibility
          />
        </div>
        <div>
          <Input
            label="Talk with LegalMate"
            value={input}
            onChange={handleTextInput}
            disabled={loading}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            aria-label="Input for talking with LegalMate"
          />
        </div>
      </div>

      <Dialog
        open={["xs", "sm", "md", "lg", "xl", "xxl"].includes(size)}
        size={size || "md"}
        handler={handleOpen}
        className="overflow-scroll"
        aria-labelledby="legal-mate-dialog-title"
        aria-describedby="legal-mate-dialog-description"
      >
        <DialogBody>
          <Card
            color="transparent"
            shadow={false}
            className="min-w-fit min-h-full overflow-y-auto"
          >
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar src="/legal-mate.gif" alt="LegalMate avatar" />
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    id="legal-mate-dialog-title"
                  >
                    Legal Mate
                  </Typography>
                </div>
                <Typography color="blue-gray">AI Agent @ LegalAid </Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-1 w-full">
              <Typography id="legal-mate-dialog-description">
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
                      const formattedLine = line
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\*(.*?)\*/g, "<em>$1</em>")
                        .replace(
                          /\[(.*?)\]\((.*?)\)/g,
                          '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
                        );
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
                      onClick={() => setShowReply(true)}
                      aria-label="Reply to LegalMate"
                    >
                      Reply
                    </Button>
                  </div>
                </>
              )}

              <div className="p-2">
                {showReply && (
                  <div className="flex w-full flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2">
                    <Input
                      label="Reply to LegalMate"
                      value={reply}
                      onChange={handleReplyInput}
                      disabled={loading}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                      aria-label="Input for replying to LegalMate"
                    />
                    <div>
                      <IconButton
                        variant="text"
                        className="rounded-full"
                        onClick={handleSubmit}
                        disabled={reply.length === 0}
                        aria-label="Send reply to LegalMate"
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
                )}
              </div>
            </CardBody>
          </Card>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="green"
            onClick={resetAgentChat}
            aria-label="Close chat with LegalMate"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default LegalMate;
