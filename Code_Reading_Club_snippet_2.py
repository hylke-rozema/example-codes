args_test = [0,1,2]

def equality_check(self, args):
    arg0 = process_variable(args[0], self.lookup)
    arg1 = process_variable(args[1], self.lookup)
    if len(args) == 2:
        return f"str({arg0}) == str({arg1})" #no and statements
    else:
        return f"str({arg0}) == str({arg1}) and {args[2]}"
    
print(equality_check('1',args_test))