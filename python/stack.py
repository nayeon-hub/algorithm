class Linter:
    def __init__(self):
        self.stack = []
    def lint(self,text):
        for i in range(len(text)):
            if(text[i] in ["(","[","{"]):
                self.stack.append(text[i])
            elif(text[i] in [")","]","}"]):
                if text[i] == ")":
                    if self.stack[-1] == "(":
                       self.stack.pop()
                    else:
                        print("ERROR")
                elif text[i] == "]":
                    if self.stack[-1] == "[":
                       self.stack.pop()
                    else:
                        print("ERROR")
                elif text[i] == "}":
                    if self.stack[-1] == "{":
                       self.stack.pop()
                    else:
                        print("ERROR")
        if self.stack != []:
            print("ERROR")

a = Linter()
a.lint("var x = y:{([1,2,3]}")
