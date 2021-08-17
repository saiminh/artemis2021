<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package artemis2021
 */

get_header();
?>

	<main id="primary" class="site-main">
    <article>
      <div class="entry-content">
        <h1 class="jobs-headline">Our Openings</h1>
        <?php 
          function callAPI($method, $url, $data){
            $curl = curl_init();
            switch ($method){
               case "POST":
                  curl_setopt($curl, CURLOPT_POST, 1);
                  if ($data)
                     curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                  break;
               case "PUT":
                  curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
                  if ($data)
                     curl_setopt($curl, CURLOPT_POSTFIELDS, $data);			 					
                  break;
               default:
                  if ($data)
                     $url = sprintf("%s?%s", $url, http_build_query($data));
            }
            // OPTIONS:
            $user = 'Dvinci-API-User: '.DVINCI_USER;
            $token = 'Dvinci-API-Token: '.DVINCI_TOKEN;
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_HTTPHEADER, array(
               $user,
               $token,
               'Content-Type: application/json',
            ));
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
            // EXECUTE:
            $result = curl_exec($curl);
            if(!$result){die("Connection Failure");}
            curl_close($curl);
            return $result;
          }

          $get_jobOpenings = callAPI('GET', 'https://artemis-auto.dvinci-hr.com/restApi/jobOpenings/', false);
          $jobOpenings = json_decode($get_jobOpenings, true);
          $get_jobPublications = callAPI('GET', 'https://artemis-auto.dvinci-hr.com/restApi/jobPublications/', false);
          $jobPublications = json_decode($get_jobPublications, true);
          $get_jobLocations = callAPI('GET', 'https://artemis-auto.dvinci-hr.com/restApi/locations/', false);
          $jobLocations = json_decode($get_jobLocations, true);

          foreach ($jobOpenings as $entry) {
            // Get the publication dataset equivalent
            $jobOpeningID = $entry['id'];
            $keyOfPub = array_search( $jobOpeningID, array_column( $jobPublications, 'jobOpeningId' ) );
            $publicationData = $jobPublications[$keyOfPub];
            $jobLinkNumber = $publicationData['id'];
           
            if ( 
              $entry['status'] == 'ACTIVE' && 
              $publicationData['placements'] && 
              $entry['jobPublications'] && 
              $entry['name'] !== 'Unsolicited Job Opening') {
            
            // Create an array with the location names
            $locnames = array();
            foreach ( $entry['locationIds'] as $location ) {
              $key = array_search( $location, array_column( $jobLocations, 'id' ) );
              array_push( $locnames, $jobLocations[$key]['name'] );
            }
            echo '
            <a href="https://artemis-auto.dvinci-hr.com/en/jobs/'.$jobLinkNumber.'" target="blank" class="jobs-entry">
              <div class="jobs-entry-jobtitle">'
                .$entry['name'].'
              </div>
              <div class="jobs-entry-joblocations">';
            forEach($locnames as $locname){
              echo '<span class="jobs-entry-joblocation-name">'.$locname.'</span>';
            };
            echo '</div>
            </a>
            ';
           }
         }

         $errors = $jobOpenings['response']['errors'];
         $data = $jobOpenings['response']['data'][0];
        ?>
      </div><!-- .entry-content -->
    </article><!-- #post-<?php the_ID(); ?> -->

    <?php 
      $pagenav = 1;
      if( is_page( 'company' ) ){
        $prev = '<svg class="artemis-logo" width="312" height="50" viewBox="0 0 312 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="artemis-logo-letter-a" d="M43.3349 49.1162H36.882L32.0134 34.5889L11.1863 34.5889L6.4529 49.1162H0L15.6106 0.634216L27.2993 0.634216L43.3349 49.1162ZM30.2359 29.2853L21.4646 3.07465L12.9251 29.3045L30.2359 29.2853Z" fill="#000000"/><path class="artemis-logo-letter-r" d="M88.8721 49.1161H81.3566L66.9245 28.5935H56.453V49.1161H50.3672V0.61499H74.0922C75.896 0.614974 77.6819 0.969274 79.3476 1.65755C81.0133 2.34583 82.526 3.35454 83.7987 4.62577C85.0714 5.897 86.0792 7.40572 86.7642 9.06534C87.4491 10.725 87.7978 12.5028 87.7902 14.2968C87.7902 22.1369 82.709 28.459 74.3627 28.5935L88.8721 49.1161ZM72.7205 23.3091C73.9048 23.4197 75.0992 23.2738 76.2213 22.8812C77.3434 22.4886 78.3666 21.8588 79.2205 21.0351C80.0744 20.2114 80.7386 19.2134 81.1674 18.1099C81.5962 17.0063 81.7794 15.8234 81.7043 14.6427C81.7043 10.5689 79.328 5.9186 74.0922 5.9186H56.453V23.3091H72.7205Z" fill="#000000"/><path class="artemis-logo-letter-t" d="M132.497 0.61499V6.16841H115.766V49.1161H109.661V6.16841H92.9297V0.61499H132.497Z" fill="#000000"/><path class="artemis-logo-letter-e" d="M145.481 5.9186V22.2714H172.665V27.4789H145.481V43.8318H175.273V49.1161H139.396V0.61499H175.273V5.9186H145.481Z" fill="#000000"/><path class="artemis-logo-letter-m" d="M230.797 0.61499V49.1161H224.711V7.99393L209.777 49.1161H203.324L188.39 7.99393V49.1161H182.304V0.61499H191.964L206.492 41.1607L221.079 0.61499H230.797Z" fill="#000000"/><path class="artemis-logo-letter-i" d="M270.075 43.6396H256.879V6.11078H270.075V0.653442H256.879H250.774H237.675V6.11078H250.774V43.6396H237.675V49.1162H250.774H256.879H270.075V43.6396Z" fill="#000000"/><path class="artemis-logo-letter-s" d="M290.182 22.5596L297.137 20.9646C301.446 19.8693 304.518 17.352 304.518 13.8932C304.518 9.4927 300.654 5.55342 293.37 5.55342C285.642 5.55342 282.203 11.1453 282.203 15.5457H275.943C275.943 7.85934 281.739 0 293.331 0C302.991 0 310.719 6.20676 310.719 13.9316C310.719 21.9447 304.305 25.4612 298.606 26.8447L296.152 27.402L289.197 28.9969C284.888 30.1115 281.816 32.6287 281.816 36.0684C281.816 40.4689 285.68 44.4274 292.964 44.4274C300.692 44.4274 304.131 38.8163 304.131 34.4158H310.391C310.391 42.1022 304.595 49.9808 293.003 49.9808C283.343 49.9808 275.615 43.7548 275.615 36.03C275.615 28.3051 282.048 24.5004 287.728 23.136L290.182 22.5596Z" fill="#000000"/></svg>';
        $prevurl = get_home_url();
        $next = 'Portfolio';
        $nexturl = '/portfolio';
      } elseif ( is_page( 'portfolio' ) ) {
        $prev = 'Company';
        $prevurl = '/company';
        $next = 'Team';
        $nexturl = '/team';
      } elseif ( is_page( 'team' ) ) {
        $prev = 'Portfolio';
        $prevurl = '/portfolio';
        $next = 'News';
        $nexturl = '/news';
      } elseif ( is_page( 'News' ) ) {
        $prev = 'Team';
        $prevurl = '/team';
        $next = 'Jobs';
        $nexturl = '/jobs';
      } elseif ( is_page( 'jobs' ) ) {
        $prev = 'News';
        $prevurl = '/news';
        $next = '<svg class="artemis-logo" width="312" height="50" viewBox="0 0 312 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="artemis-logo-letter-a" d="M43.3349 49.1162H36.882L32.0134 34.5889L11.1863 34.5889L6.4529 49.1162H0L15.6106 0.634216L27.2993 0.634216L43.3349 49.1162ZM30.2359 29.2853L21.4646 3.07465L12.9251 29.3045L30.2359 29.2853Z" fill="#000000"/><path class="artemis-logo-letter-r" d="M88.8721 49.1161H81.3566L66.9245 28.5935H56.453V49.1161H50.3672V0.61499H74.0922C75.896 0.614974 77.6819 0.969274 79.3476 1.65755C81.0133 2.34583 82.526 3.35454 83.7987 4.62577C85.0714 5.897 86.0792 7.40572 86.7642 9.06534C87.4491 10.725 87.7978 12.5028 87.7902 14.2968C87.7902 22.1369 82.709 28.459 74.3627 28.5935L88.8721 49.1161ZM72.7205 23.3091C73.9048 23.4197 75.0992 23.2738 76.2213 22.8812C77.3434 22.4886 78.3666 21.8588 79.2205 21.0351C80.0744 20.2114 80.7386 19.2134 81.1674 18.1099C81.5962 17.0063 81.7794 15.8234 81.7043 14.6427C81.7043 10.5689 79.328 5.9186 74.0922 5.9186H56.453V23.3091H72.7205Z" fill="#000000"/><path class="artemis-logo-letter-t" d="M132.497 0.61499V6.16841H115.766V49.1161H109.661V6.16841H92.9297V0.61499H132.497Z" fill="#000000"/><path class="artemis-logo-letter-e" d="M145.481 5.9186V22.2714H172.665V27.4789H145.481V43.8318H175.273V49.1161H139.396V0.61499H175.273V5.9186H145.481Z" fill="#000000"/><path class="artemis-logo-letter-m" d="M230.797 0.61499V49.1161H224.711V7.99393L209.777 49.1161H203.324L188.39 7.99393V49.1161H182.304V0.61499H191.964L206.492 41.1607L221.079 0.61499H230.797Z" fill="#000000"/><path class="artemis-logo-letter-i" d="M270.075 43.6396H256.879V6.11078H270.075V0.653442H256.879H250.774H237.675V6.11078H250.774V43.6396H237.675V49.1162H250.774H256.879H270.075V43.6396Z" fill="#000000"/><path class="artemis-logo-letter-s" d="M290.182 22.5596L297.137 20.9646C301.446 19.8693 304.518 17.352 304.518 13.8932C304.518 9.4927 300.654 5.55342 293.37 5.55342C285.642 5.55342 282.203 11.1453 282.203 15.5457H275.943C275.943 7.85934 281.739 0 293.331 0C302.991 0 310.719 6.20676 310.719 13.9316C310.719 21.9447 304.305 25.4612 298.606 26.8447L296.152 27.402L289.197 28.9969C284.888 30.1115 281.816 32.6287 281.816 36.0684C281.816 40.4689 285.68 44.4274 292.964 44.4274C300.692 44.4274 304.131 38.8163 304.131 34.4158H310.391C310.391 42.1022 304.595 49.9808 293.003 49.9808C283.343 49.9808 275.615 43.7548 275.615 36.03C275.615 28.3051 282.048 24.5004 287.728 23.136L290.182 22.5596Z" fill="#000000"/></svg>';
        $nexturl = get_home_url();
      } else {
        $pagenav = 0;
      }
    ?>
    <?php if ( $pagenav ) : ?>
    <div class="page-nav">
      <a class="page-nav-prev" href="<?php echo $prevurl; ?>">
        <svg class="page-nav-btn page-nav-btn-prev" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="55" height="55" rx="10" fill="#000"/><path d="M28.218 25.697L16 25.661v2.642l12.218-.037 8.368-.073L28.253 37h3.142L41 26.982 31.395 17h-3.107l8.333 8.77-8.404-.073z" fill="#fff"/></svg>
        <?php echo $prev; ?>
      </a>
      <a class="page-nav-next" href="<?php echo $nexturl; ?>">
        <?php echo $next; ?>
        <svg class="page-nav-btn page-nav-btn-next" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="55" height="55" rx="10" fill="#000"/><path d="M28.218 25.697L16 25.661v2.642l12.218-.037 8.368-.073L28.253 37h3.142L41 26.982 31.395 17h-3.107l8.333 8.77-8.404-.073z" fill="#fff"/></svg>
      </a>
    </div>
    <?php endif; ?>
	</main><!-- #main -->

<?php
//get_sidebar();
get_footer();
