(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{101:function(e,t,s){"use strict";s.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"validating-the-nfs-provisioner-using-wordpress-and-mysql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#validating-the-nfs-provisioner-using-wordpress-and-mysql","aria-hidden":"true"}},[e._v("#")]),e._v(" Validating the NFS provisioner using WordPress and MySQL")]),r("p",[e._v("A sample playbook has been provided to show how to use the NFS provioner for perstent storage for a WordPress and MySQL deployment.")]),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),r("ul",[r("li",[e._v("Install the "),r("code",[e._v("kubectl")]),e._v(" binary on your Ansible box")]),r("li",[e._v("Install the UCP Client bundle for the "),r("code",[e._v("admin")]),e._v(" user")]),r("li",[e._v("Confirm that you can connect to the cluster by running a test command, for example, "),r("code",[e._v("kubectl get nodes")])]),r("li",[e._v("Deploy the NFS provisioner as outlined in the preceeding section. The article assumes that the NFS\nconfiguration is the same as used in that section, namely:")])]),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),r("th",{staticStyle:{"text-align":"left"}},[e._v("Value")])])]),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_namespace")]),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("nfsstorage")])])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_role")]),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("nfs-provisioner-runner")])])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_serviceaccount")]),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("nfs-provisioner")])])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_name")]),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("hpe.com/nfs")])])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_storage_class_name")]),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("nfs")])])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_server_ip")]),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("hpe2-nfs.am2.cloudra.local")])])]),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("nfs_provisioner_server_share")]),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("/k8s")])])])])]),r("h2",{attrs:{id:"running-the-playbook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running-the-playbook","aria-hidden":"true"}},[e._v("#")]),e._v(" Running the playbook")]),r("p",[e._v("The playbook "),r("code",[e._v("test/playbooks/wordpress-mysql-nfs.yml")]),e._v(" creates Persistent Volume Claims for both "),r("code",[e._v("Wordpress")]),e._v(" and "),r("code",[e._v("MySQL")]),e._v(", deploys both applications and makes the "),r("code",[e._v("WordPress")]),e._v(" UI available via a NodePort.")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# cd ~/Docker-Synergy\n#  ansible-playbook -i hosts ./test/playbooks/wordpress-mysql-nfs.yml --vault-password-file .vault_pass\n")])]),r("p",[e._v("The output shows the components created along with the NodePort for the "),r("code",[e._v("wordpress")]),e._v(" service.")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('ok: [localhost] => {\n    "ps.stdout_lines": [\n        "Cluster \\"ucp_hpe2-ucp01.am2.cloudra.local:6443_admin\\" set.",\n        "User \\"ucp_hpe2-ucp01.am2.cloudra.local:6443_admin\\" set.",\n        "Context \\"ucp_hpe2-ucp01.am2.cloudra.local:6443_admin\\" modified.",\n        "namespace/wordpress-mysql created",\n        "secret/mysql-pass created",\n        "persistentvolumeclaim/mysql-pv-claim created",\n        "persistentvolumeclaim/wp-pv-claim created",\n        "deployment.apps/wordpress-mysql created",\n        "deployment.apps/wordpress created",\n        "service/wordpress-mysql created",\n        "service/wordpress created",\n        "NAME              TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE",\n        "wordpress         NodePort    10.96.216.103   <none>        80:33790/TCP   0s",\n        "wordpress-mysql   ClusterIP   None            <none>        3306/TCP       0s"\n    ]\n')])]),r("p",[e._v("Browse to the specified port on any node in your cluster.")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("http://hpe2-ucp01.am2.cloudra.local:33790\n")])]),r("h2",{attrs:{id:"configuring-wordpress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuring-wordpress","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuring WordPress")]),r("p",[e._v("You need to configure the language and password before WordPress is ready to use.")]),r("p",[r("img",{attrs:{src:s(74),alt:'"Configure WordPress language"',title:"Figure. Configure WordPress language"}})]),r("p",[r("strong",[e._v("Figure.")]),e._v(" Configure WordPress language")]),r("p",[e._v("Add  a username, password and other configuration details.")]),r("p",[r("img",{attrs:{src:s(75),alt:'"Configure WordPress password"',title:"Figure. Configure WordPress password"}})]),r("p",[r("strong",[e._v("Figure.")]),e._v(" Configure WordPress password")]),r("p",[e._v("Log in to WordPress, with the user name and password you have just set up.")]),r("p",[r("img",{attrs:{src:s(76),alt:'"Configure WordPress password"',title:"Figure. WordPress login"}})]),r("p",[r("strong",[e._v("Figure.")]),e._v(" WordPress login")]),r("p",[e._v("The welcome page is presented.")]),r("p",[r("img",{attrs:{src:s(77),alt:'"WordPress welcome"',title:"Figure. WordPress welcome"}})]),r("p",[r("strong",[e._v("Figure.")]),e._v(" WordPress welcome")]),r("h2",{attrs:{id:"create-your-first-post"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-post","aria-hidden":"true"}},[e._v("#")]),e._v(" Create your first post")]),r("p",[e._v("Click on "),r("code",[e._v("Write your first blog post")]),e._v(" and start creating some content. Add a blog title and then click "),r("code",[e._v("Add Media")]),e._v(" to upload an image to the Media Library and then "),r("code",[e._v("Insert into post")]),e._v(". In this example, the image is a file named\n"),r("code",[e._v("380 with OmniStack.jpg")]),e._v(".")]),r("p",[r("img",{attrs:{src:s(78),alt:'"Create your first WordPress blog post"',title:"Figure. Create your first WordPress blog post"}})]),r("p",[r("strong",[e._v("Figure.")]),e._v(" Create your first WordPress blog post")]),r("p",[e._v("Click "),r("code",[e._v("Publish")]),e._v(" and then "),r("code",[e._v("View post")]),e._v(" to see your new blog post.")]),r("p",[r("img",{attrs:{src:s(79),alt:'"View your first WordPress blog post"',title:"Figure. View your first post"}})]),r("p",[r("strong",[e._v("Figure.")]),e._v(" View your first post")]),r("h2",{attrs:{id:"test-persistence-for-wordpress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#test-persistence-for-wordpress","aria-hidden":"true"}},[e._v("#")]),e._v(" Test persistence for WordPress")]),r("p",[e._v("Find your WordPress Persistent Volume Claim (PVC)")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# kubectl -n wordpress-mysql get pvc\nNAME             STATUS    VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\nmysql-pv-claim   Bound     pvc-d48880e3-2d58-11e9-adb2-0242ac110003   1Gi        RWO            nfs            1h\nwp-pv-claim      Bound     pvc-d4bc101f-2d58-11e9-adb2-0242ac110003   20Gi       RWO            nfs            1h\n")])]),r("p",[e._v("Connect to the NFS VM and browse the "),r("code",[e._v("/k8s")]),e._v(" folder to find the volume for the WordPress claim "),r("code",[e._v("wp-pv-claim")]),e._v(".")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# ssh hpe2-nfs ls /k8s\nwordpress-mysql-mysql-pv-claim-pvc-d48880e3-2d58-11e9-adb2-0242ac110003\nwordpress-mysql-wp-pv-claim-pvc-d4bc101f-2d58-11e9-adb2-0242ac110003\n")])]),r("p",[e._v("Locate the "),r("code",[e._v("wp-content")]),e._v(" folder.")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# ssh hpe2-nfs ls /k8s/wordpress-mysql-wp-pv-claim-pvc-d4bc101f-2d58-11e9-adb2-0242ac110003\nindex.php\nlicense.txt\nreadme.html\nwp-activate.php\nwp-admin\nwp-blog-header.php\nwp-comments-post.php\nwp-config.php\nwp-config-sample.php\nwp-content\nwp-cron.php\nwp-includes\nwp-links-opml.php\nwp-load.php\nwp-login.php\nwp-mail.php\nwp-settings.php\nwp-signup.php\nwp-trackback.php\nxmlrpc.php\n")])]),r("p",[e._v("Now find the image used in the blog post.")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# ssh hpe2-nfs ls /k8s/wordpress-mysql-wp-pv-claim-pvc-d4bc101f-2d58-11e9-adb2-0242ac110003/wp-content/uploads/2019/02\n380-with-OmniStack-100x100.jpg\n380-with-OmniStack-150x150.jpg\n380-with-OmniStack-300x150.jpg\n380-with-OmniStack-768x384.jpg\n380-with-OmniStack.jpg\n")])]),r("p",[e._v("Note that WordPress has created a number of variations of the original image, for different screen sizes.")]),r("p",[e._v("Shutdown wordpress (leave MySQL running for now)")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# kubectl -n wordpress-mysql delete -f /tmp/wordpress-mysql-nfs/wordpress-deployment.yml\ndeployment.apps "wordpress" deleted\n')])]),r("p",[e._v("Refresh the page in the browser to confirm that WordPress is indeed inaccessible.")]),r("p",[r("img",{attrs:{src:s(80),alt:'"Cannot connect to WordPress"',title:"Figure. Cannot connect to WordPress"}})]),r("p",[r("strong",[e._v("Figure.")]),e._v(" Cannot connect to WordPress")]),r("p",[e._v("Redeploy Wordpress")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# kubectl -n wordpress-mysql apply -f /tmp/wordpress-mysql-nfs/wordpress-deployment.yml        \ndeployment.apps/wordpress created\n")])]),r("p",[e._v("Refresh the page in the browser to confirm that WordPress is now accessible and that the image in the blog post\nhas survived the shutdown.")]),r("p",[r("img",{attrs:{src:s(81),alt:'"View restored post"',title:"Figure. View restored post"}})]),r("p",[r("strong",[e._v("Figure.")]),e._v(" View restored post")]),r("h2",{attrs:{id:"test-persistence-in-mysql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#test-persistence-in-mysql","aria-hidden":"true"}},[e._v("#")]),e._v(" Test persistence in MySQL")]),r("p",[e._v("A similar procedure can be performed for MySQL. While assets such as images, CSS files, etc are stored in the\nWordPress volume, information about users, posts, comments, tags, etc are stored in the MySQL database.\nIt is possible to browse the tables in the database and identify the rows related to the blog post you created.")]),r("p",[e._v("Shut down MySQL as follows:")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# kubectl -n wordpress-mysql delete -f /tmp/wordpress-mysql-nfs/mysql-deployment.yml\ndeployment.apps "wordpress-mysql" deleted\n')])]),r("p",[e._v("Refresh the page for your blog post, and you will see that WordPress can no longer connect to the database:")]),r("p",[r("img",{attrs:{src:s(82),alt:'"Cannot connect to MySQL"',title:"Figure. Cannot connect to MySQL"}})]),r("p",[r("strong",[e._v("Figure.")]),e._v(" Cannot connect to MySQL")]),r("p",[e._v("Restore the MySQL deployment:")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# ubectl -n wordpress-mysql apply -f /tmp/wordpress-mysql-nfs/mysql-deployment.yml\ndeployment.apps/wordpress-mysql created\n")])]),r("p",[e._v("Refresh the page in the browser to confirm that WordPress can now access the database and that the blog post\nhas survived the database shutdown.")]),r("p",[r("img",{attrs:{src:s(83),alt:'"Figure. Check after MySQL restored"',title:"Figure. Check after MySQL restored"}})]),r("p",[r("strong",[e._v("Figure.")]),e._v(" Check after MySQL restored")])])}],o=s(0),a=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);t.default=a.exports},74:function(e,t,s){e.exports=s.p+"assets/img/wordpress-install-1.fffa4d0f.png"},75:function(e,t,s){e.exports=s.p+"assets/img/wordpress-install-2.47f4aa03.png"},76:function(e,t,s){e.exports=s.p+"assets/img/wordpress-install-3.5f8fd141.png"},77:function(e,t,s){e.exports=s.p+"assets/img/wordpress-welcome.8a09d488.png"},78:function(e,t,s){e.exports=s.p+"assets/img/wordpress-newpost.19d56696.png"},79:function(e,t,s){e.exports=s.p+"assets/img/wordpress-firstpost.2fa0f1aa.png"},80:function(e,t,s){e.exports=s.p+"assets/img/wordpress-cant-connect.a76daedd.png"},81:function(e,t,s){e.exports=s.p+"assets/img/wordpress-restored.81c4999f.png"},82:function(e,t,s){e.exports=s.p+"assets/img/mysql-cant-connect.c015abc3.png"},83:function(e,t,s){e.exports=s.p+"assets/img/mysql-restored.9c3ebf17.png"}}]);