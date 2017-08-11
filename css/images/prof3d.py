import sys
import time
import xmlrpclib

server_url = 'http://127.0.0.1:20738/RPC2'
server = xmlrpclib.Server(server_url)
G = server.ubigraph

node_list      = {}
edge_list      = set()
node_size_list = {}

font_size          = "6"
node_color         = "#50ff50"
node_called_color  = "#ff8888"
step_time          = 0.0
step_function_time = 0.01

def smooth_size(v, size1, size2):
    for i in range(0, 5):
        G.set_vertex_attribute(v, "size", str(size1 + (i/4.0)*(size2-size1)))
        #time.sleep(0.01)

def trace_dispatch(frame, event, arg):
    if event in ["call", "c_call"]:
        try:
            caller = frame.f_back.f_code
        except:
            return

        caller_string  = caller.co_name
        #caller_string += "- %s:%s" % (caller.co_filename, caller.co_firstlineno)

        try:
            called = frame.f_code
        except:
            return

        called_string  = called.co_name
        #called_string += "- %s:%s" % (called.co_filename, called.co_firstlineno)

        if node_list.has_key(caller_string):
            caller_node = node_list[caller_string]
        else:
            new_node = G.new_vertex()
            G.set_vertex_attribute(new_node, "color", node_color)
            node_list.update({caller_string : new_node})
            G.set_vertex_attribute(new_node, "label", called_string)
            G.set_vertex_attribute(new_node, "fontsize", font_size)
            caller_node = new_node

        if node_list.has_key(called_string):
            called_node = node_list[called_string]
        else:
            new_node = G.new_vertex()
            G.set_vertex_attribute(new_node, "color", node_color)
            node_list.update({called_string : new_node})
            G.set_vertex_attribute(new_node, "label", called_string)
            G.set_vertex_attribute(new_node, "fontsize", font_size)
            called_node = new_node

        if (caller_node, called_node) in edge_list:
            G.set_vertex_attribute(called_node, "color", node_called_color)
            smooth_size(called_node, 1.0, 2.0)
            #time.sleep(step_function_time)
            G.set_vertex_attribute(called_node, "color", node_color)
            smooth_size(called_node, 2.0, 1.0)
            return

        e = G.new_edge(caller_node, called_node)
        edge_list.add((caller_node, called_node))
        G.set_edge_attribute(e, "arrow", "true")
        #time.sleep(step_time)

def profile_me():
    G.clear()
    sys.setprofile(trace_dispatch)
    
